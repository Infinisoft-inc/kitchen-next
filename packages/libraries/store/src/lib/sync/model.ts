const model = {
  SK:{
    createAt: '',
    status: "",//processing ,complete, failed
    meta:{
      event: 'item.clicked',// with this event and the data, its possible to dispatch event with payload so user get back at screen its thing
    },
    data: {}
  }
}
