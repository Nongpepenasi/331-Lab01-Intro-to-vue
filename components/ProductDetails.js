const productDetails = {
    props: {
      details: Array
    },
    template:
      /*html*/
      `
      <div>
          <ul>
              <li v-for="detail in details">{{ detail }}</li>
          </ul>
      </div>
      `
  };