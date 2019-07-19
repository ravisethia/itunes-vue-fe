export default {
  props: ['item'],
  methods: {
    /* custom method for add/remove of favourites */
    addToFavourite: function (item, i, e) {
      e.srcElement.classList.toggle('active')
      var storedArray = [ ]
      if (e.srcElement.classList.contains('active')) {
        if (localStorage.favourites) {
          storedArray = JSON.parse(localStorage.getItem('favourites'))
          if (e.srcElement.getAttribute('data-id')) {
            storedArray.push(e.srcElement.getAttribute('data-id'))
          }
          localStorage.setItem('favourites', JSON.stringify(storedArray))
        } else {
          if (e.srcElement.getAttribute('data-id')) {
            storedArray.push(e.srcElement.getAttribute('data-id'))
          }
          localStorage.setItem('favourites', JSON.stringify(storedArray))
        }
      } else {
        storedArray = JSON.parse(localStorage.getItem('favourites'))
        var index = storedArray.indexOf(e.srcElement.getAttribute('data-id'))
        if (index > -1) {
          storedArray.splice(index, 1)
        }
        localStorage.setItem('favourites', JSON.stringify(storedArray))
      }
    },
  },
}
