/* importing dependent files and components */
import axios from 'axios'
import Search from './../../components/SearchBar/SearchBar.vue'
import SearchCard from './../../components/SearchCard/SearchCard.vue'
export default {
  components: {
    'search-bar': Search,
    'search-card': SearchCard,
  },
  data: function () {
    return {
      message: '',
      result: {},
      error: '',
      search: '',
    }
  },
  mounted () {
    /* Storing the last searched term to render the view on reload */
    if (localStorage.searchTerm) {
      this.search = localStorage.getItem('searchTerm')
      const data = {
        term: this.search,
      }
      this.retriveData(data)
    }
  },
  updated () {
    /* Updating the view and active state based on changes to data */
    var elems = document.querySelectorAll('.favourite-icon')
    const storedArray = JSON.parse(localStorage.getItem('favourites'))
    for (var i = 0; i < elems.length; i++) {
      for (var j = 0; j < storedArray.length; j++) {
        if (elems[i].getAttribute('data-id') === storedArray[j]) {
          elems[i].classList.add('active')
        }
      }
    }
  },
  methods: {
    /* Custom Methods for retrieving and posting data */
    retriveData: function (data) {
      localStorage.setItem('searchTerm', data.term)
      axios.post('https://itunes-search-express.herokuapp.com/search', data)
        .then(resultItunes => {
          this.result = resultItunes.data
        })
        .catch(error => {
          this.error = error.data
        })
    },
    sendData: function () {
      this.result = {}
      const data = {
        term: this.search,
      }
      this.retriveData(data)
    },
  },
}
