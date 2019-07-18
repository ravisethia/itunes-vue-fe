export default {
  props: ["item"],
  methods: {
    /* custom method for add/remove of favourites */
    addToFavourite : function(item, i, e) {
      e.srcElement.classList.toggle('active');
      if (e.srcElement.classList.contains('active')) {
        if (localStorage.favourites) {
          var storedArray = JSON.parse(localStorage.getItem("favourites"));
            if (e.srcElement.getAttribute('data-id')) {
              storedArray.push(e.srcElement.getAttribute('data-id'));
            }
          localStorage.setItem("favourites", JSON.stringify(storedArray));
        } else {
          var storedArray = [ ];
          if (e.srcElement.getAttribute('data-id')) {
            storedArray.push(e.srcElement.getAttribute('data-id'));
          }
            localStorage.setItem("favourites", JSON.stringify(storedArray));
        }
      } else {
          var storedArray = JSON.parse(localStorage.getItem("favourites"));
          var index = storedArray.indexOf(e.srcElement.getAttribute('data-id'));
          if (index > -1) {
            storedArray.splice(index, 1);
          }
          localStorage.setItem("favourites", JSON.stringify(storedArray));
      }
    }
  }
}
