/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { useMicroContext } from "@/context/micro";
import { Button, Form } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useSyncExternalStore } from "react";
import { CategoryIcon, ContactIcon, SubcategoryIcon } from "../../assets/svg";
import { useMetaModel } from "../../hooks/useMetaModel";
import Title from "./title";

const CategoryForm = React.lazy(() => import("./forms/category.form"));
const ContactForm = React.lazy(() => import("./forms/contact.form"));
// const Summary = React.lazy(() => import("./forms/summary"));


const Create = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const [form] = Form.useForm<API.Item>();
  const { subCategories, categories, filterSubcategory } = useMetaModel()
  const { store } = useMicroContext()
  const state = useSyncExternalStore(store.subscribe, store.getSnapshot)
  const contact = store.getNormalizedState().get(state?.itemSelectedId ?? '') || {}

  /**
   * Effects
   */
  React.useEffect(() => {
    return store.subscribe((event, state, payload) => {
      if (event.match(/(create.clicked)/g)) {
        setVisible(true)
        createNewContact()
      }
    })
  }, [store])




  const steps = [
    {
      title: <><span className={'style.titleIcon'}><ContactIcon /></span>Contact</>,
      description: 'How can you reach this contact?',
      // render: () => <MotionSlider direction={"right"}> <ContactForm form={form} /></MotionSlider>
      render: () => <ContactForm />
    },
    {
      title: <><span className={'style.titleIcon'}><CategoryIcon /></span>Category</>,
      description: 'What category of contact it is?',
      render: () => <CategoryForm map={categories} onClick={filterSubcategory} field='SK' />
    },
    {
      title: <><span className={'style.titleIcon'}><SubcategoryIcon /></span>Category</>,
      description: 'What subcategory of contact it is?',
      render: () => {
        return <CategoryForm map={subCategories} field='Subcategory' />
      }
    }
  ]

  const percent = React.useMemo(() => Math.round(activeStep / (steps.length - 1) * 100), [activeStep, steps.length])

  const Footer = () => {
    return <>
      <Button hidden={activeStep <= 0} key={1} type='default' onClick={() => { setActiveStep(prev => prev - 1) }}>Back</Button>
      <Button hidden={activeStep >= (steps.length - 1)} key={2} type='primary' onClick={() => { setActiveStep(prev => prev + 1) }}>Next</Button>
      <Button hidden={activeStep !== steps.length - 1} key={3} type='primary' onClick={form.submit}>
        Submit
      </Button>
    </>
  }

  const createNewContact = () => {
    const _newContact: API.Item = {
      SK: `tojette__${new Date().getTime().toString()}`,
      Subcategory: `ami__${new Date().getTime().toString()}`,
      name: 'Test',
      telephones: [],
      relatedWith: []
    }

    store.mutate(_state => ({
      ..._state,
      list: [_newContact].concat(_state?.list),
      itemSelectedId: _newContact.SK
    }))
  }

  const onChange = (field: keyof API.Item, newVal: any) => {
    store.mutate(_state => {
      if (contact?.[field]) {
        contact[field] = newVal
      }
      return { ..._state }
    })
  }

  return <>

    { /* @ts-ignore */}
    <Modal
      width={620}
      visible={visible}
      onCancel={() => setVisible(false)}
      destroyOnClose
      footer={<Footer />}
      title={<Title title={steps[activeStep].title} subtitle={steps[activeStep].description} />}
    >
      <Form onChangeCapture={e => {
        e.preventDefault()
        console.log(`eeee `, e)
        // @ts-ignore
        const name: keyof API.Item = e.target.name
        // @ts-ignore
        const value = e.target.value


        store.mutate(_state => {
          // if (contact?.[name]) {
            contact[name] = value
          // }
          return { ..._state, dog: new Date().getTime() }
        })

      }}>
        <div className={'style.ctnCenter'}>
          <span className={'style.flex'}>
            {steps.map((s, i) => <span hidden={activeStep !== i} key={i} className={'style.flex'}>{s.render()}</span>)}
          </span>

          <button type='submit' onClick={e => {
            e.preventDefault()
            e.stopPropagation()

            // console.log(`FORM = `, state)
            console.log(`e = `, e)
          }}>Submit DOG</button>
        </div>
      </Form>
    </Modal>
  </>
}

export default Create
