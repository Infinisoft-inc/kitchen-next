/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { Button, Form } from "antd";
import Modal from "antd/lib/modal/Modal";
import React from "react";
import { CategoryIcon, ContactIcon, SubcategoryIcon } from "../../assets/svg";
import { useMicroContext } from "../../context/micro";
import { useMetaModel } from "../../hooks/useMetaModel";
import Title from "./title";

const CategoryForm = React.lazy(() => import("./forms/category.form"));
const ContactForm = React.lazy(() => import("./forms/contact.form"));
const Summary = React.lazy(() => import("./forms/summary"));


const Create = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const [form] = Form.useForm<API.Item>();
  const { store } = useMicroContext()
  const { subCategories, categories, filterSubcategory } = useMetaModel()
  const errors = form?.getFieldsError().filter(r => r.errors.length > 0).flatMap(e => e.errors?.[0])
  const isError = errors.length > 0
  const isLoading = false


  /**
   * Effects
   */
  React.useEffect(() => {
    return store.subscribe((event, state, payload) => {
      if (event.match(/(create.clicked)/g)) {
        setVisible(true)
      }
    })
  }, [store])


  const resetModal = () => {
    setActiveStep(0)
    form.resetFields()
  }

  const handleClose = () => { resetModal(); setVisible(false) }
  const [asyncErrors, setAsyncErrors] = React.useState<string[]>([]);
  const validate = async () => {
    try {
      await form.validateFields()
      setAsyncErrors([])
    } catch (error) {
      setAsyncErrors(form?.getFieldsError().filter(r => r.errors.length > 0).flatMap(e => e.errors?.[0]) ?? [])
    }
  }

  const steps = [
    {
      title: <><span className={'style.titleIcon'}><ContactIcon /></span>Contact</>,
      description: 'How can you reach this contact?',
      /* @ts-ignore */
      // render: () => <MotionSlider direction={"right"}> <ContactForm form={form} /></MotionSlider>
      render: () => <ContactForm form={form} />
    },
    {
      title: <><span className={'style.titleIcon'}><CategoryIcon /></span>Category</>,
      description: 'What category of contact it is?',
      /* @ts-ignore */
      render: () => <CategoryForm map={categories} onClick={filterSubcategory} field='SK' />
    },
    {
      title: <><span className={'style.titleIcon'}><SubcategoryIcon /></span>Category</>,
      description: 'What subcategory of contact it is?',
      render: () => {
        /* @ts-ignore */
        return <CategoryForm map={subCategories} field='Subcategory' />
      }
    },
    {
      title: <><span className={'style.titleIcon'}><SubcategoryIcon /></span>Summary</>,
      description: 'Is the information correct?',
      /* @ts-ignore */
      render: () => <Summary variant='horizontal' editable={false} hide={['avatar']} values={form?.getFieldsValue() ?? {}} errors={asyncErrors} />
    }
  ]

  const percent = React.useMemo(() => Math.round(activeStep / (steps.length - 1) * 100), [activeStep, steps.length])
  const progressStatus = () => {
    if (isError) {
      return "exception"
    }

    if (percent === 100 && !isError) {
      return "success"
    }

    return "normal"
  }

  const Footer = () => {
    return <>
      <Button disabled={isLoading} hidden={activeStep <= 0 || isLoading} key={1} type='default' onClick={() => { setActiveStep(prev => prev - 1) }}>Back</Button>
      <Button disabled={isLoading} hidden={activeStep >= (steps.length - 1)} key={2} type='primary' onClick={() => { if (activeStep >= (steps.length - 2)) { validate() }; setActiveStep(prev => prev + 1) }}>Next</Button>
      <Button disabled={isError || isLoading} hidden={activeStep !== steps.length - 1} key={3} type='primary' loading={isLoading} onClick={form.submit}>
        Submit
      </Button>
    </>
  }


  // const Title = () => <div className={'style.ctnCenter'}>
  //   <div className={'style.titleLeft'}>
  //     <Typography.Title className='invariant' level={1} >{steps[activeStep].title}</Typography.Title>
  //     <Typography.Text>{steps[activeStep].description} </Typography.Text>
  //   </div>
  //   <div className={'style.titleRight'}><Progress width={80} percent={percent} type='circle' status={progressStatus()} /></div>
  // </div>


  return <>

    { /* @ts-ignore */}
    <Modal
      width={620}
      visible={visible}
      onCancel={handleClose}
      destroyOnClose
      footer={<Footer />}
      title={<Title title={'Contact'} subtitle={'How can you reach this contact?'} />}
    >
      <Form<API.Item>
        form={form}
        onBlur={() => {
        }}
        onFinish={async (val) => {
          store.publish('add', val)
          handleClose();
        }}
        validateTrigger='onChange'
      >
        <div className={'style.ctnCenter'}>
          <span className={'style.flex'}>
            {steps.map((s, i) => <span hidden={activeStep !== i} key={i} className={'style.flex'}>{s.render()}</span>)}
          </span>
        </div>
      </Form>
    </Modal>
  </>
}

export default Create
