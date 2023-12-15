import * as yup from 'yup'

const bookSchema = yup.object().shape({
  title: yup.string().trim().required('Book title field cannot be empty!'),
  production: yup.string().trim().required('Book publishing house field cannot be empty!'),
  author: yup.string().trim().required('Book author field cannot be empty!'),
  summary: yup.string().trim().min(50, 'Book summary must be at least 50 characters!').required('Book summary field cannot be empty!'),
  date: yup.date().required('Book date field cannot be empty!'),
  price: yup.number().min(0, 'Book fee cannot be less than 0!').required('Book fee field cannot be empty!'),
  imageSrc: yup.string().trim().required('Book photo link cannot be left blank!'),
  src: yup.string().url('Please enter a valid URL address!').required('URL address cannot be left blank!')
})

export default bookSchema