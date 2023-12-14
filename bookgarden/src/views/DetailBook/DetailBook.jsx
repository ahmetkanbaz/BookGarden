import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getSingleBook } from '../../utils/requests'
import Loading from '../../common/Loading/Loading'
import DangerAlert from '../../common/DangerAlert/DangerAlert'

const DetailBook = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState()
  const [singleBook, setSingleBook] = useState({})

  const getBookValues = async () => {
    setLoading(true)
    const response = await getSingleBook(id)
    setSingleBook(response)
    setLoading(false)
  }

  useEffect(() => {
    getBookValues()
  }, [])

  console.log(singleBook)

  if (loading) {
    return <Loading />
  }

  if (singleBook.message) {
    return <DangerAlert title={`The book with ID ${id} was not found in the database.`} />
  }
  return (
    <section className='py-5'>
      <div className="container">
        Hello
      </div>
    </section>
  )
}

export default DetailBook