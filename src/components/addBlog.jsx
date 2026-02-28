import { useState } from "react"
import { toast } from 'react-toastify';
import axiosBaseURL from "../api/axiosBaseURL";

export const AddBlog = () => {

    const [formData, setFormData] = useState({
        category: '',
        title: '',
        blogger_name: '',
        image: '',
        description: ''
    })

    const [formDataError, setFormDataError] = useState({
        category: '',
        title: '',
        blogger_name: '',
        image: '',
        description: ''
    })

    const handleFormData = (e) => {

        const { value, name } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }))

        let error = '';

        if (name === 'category') {
            if (!value) {
                error = 'Category is required'
            }
        }

        if (name === 'title') {
            if (!value || value.length < 3) {
                error = 'Title must be at least 3 characters'
            }
        }

        if (name === 'blogger_name') {
            if (!value || value.length < 3) {
                error = 'Name must be at least 3 characters'
            }
        }

        if (name === 'image') {
            if (!value) {
                error = 'Valid image URL is required'
            }
        }

        if (name === 'description') {
            if (!value || value.length < 3) {
                error = 'Description must be at least 3 characters'
            }
        }

        setFormDataError(prev => ({
            ...prev,
            [name]: error
        }))
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const check = Object.entries(formDataError).every((value) => value[1] == '');

        if (check == false) {
            let error = 'Enter proper details';
            console.log("There is a error", error)
            // setFormDataError(prev => ({...prev,submitError : error}))
            return;
        }
        
        // setFormDataError(prev => ({...prev,submitError : ''}))
        const newBlogDetails = {
            category: formData.category,
            title: formData.title,
            blogger_name: formData.blogger_name,
            image: formData.image,
            description:formData.description,
        }

        // await axiosBaseURL.post('/addBlog', newBlogDetails);
        toast.success("Blog added successfully");
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>

                <div>
                    <label>Category</label>
                    <select onChange={handleFormData} name="category">
                        <option value="">Select</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="technology">Technology</option>
                        <option value="sports">Sports</option>
                        <option value="business">Business</option>
                        <option value="health">Health</option>
                        <option value="science">Science</option>
                    </select>
                    <p>{formDataError.category}</p>
                </div>

                <div>
                    <label>Title</label>
                    <input onChange={handleFormData} type="text" name="title" />
                    <p>{formDataError.title}</p>
                </div>

                <div>
                    <label>Name</label>
                    <input onChange={handleFormData} type="text" name="blogger_name" />
                    <p>{formDataError.blogger_name}</p>
                </div>

                <div>
                    <label>Image</label>
                    <input onChange={handleFormData} type="text" name="image" />
                    <p>{formDataError.image}</p>
                </div>

                <div>
                    <label>Description</label>
                    <textarea onChange={handleFormData} name="description"></textarea>
                    <p>{formDataError.description}</p>
                </div>

            <p>{formDataError.submitError}</p>
                <button type="submit">Add Blog</button>

            </form>
        </>
    )
}