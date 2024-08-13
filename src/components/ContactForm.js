import { useForm } from 'react-hook-form';

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const registerOptions = {
		name: { required: 'Name is required' },
		email: { required: 'Email is required' },
		subject: { required: 'Subject is required' },
        message: { required: 'Message is required' },
	};

	const onSubmit = async (data) => {
		console.log(data);
		const response = await fetch('url', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ data }),
		});
		const responseData = await response.json();
		console.log(responseData);
	};

	return (
		<form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
			<div className='input-container flex-container'>
				<label>Name</label>
				<input
					className='form-input'
					type='text'
					name='name'
					placeholder='Enter your name'
					{...register('name', registerOptions.name)}
				/>
				<small className='error'>{errors?.name && errors.name.message}</small>
			</div>
			<div className='input-container flex-container'>
				<label>Email</label>
				<input
					className='form-input'
					type='email'
					name='email'
					placeholder='Enter your email'
					{...register('email', registerOptions.email)}
				/>
				<small className='error'>{errors?.email && errors.email.message}</small>
			</div>
			<div className='input-container flex-container'>
				<label>Subject</label>
				<input
					className='form-input'
					type='text'
					name='subject'
					placeholder='Enter your subject'
					{...register('subject', registerOptions.subject)}
				/>
				<small className='error'>
					{errors?.subject && errors.subject.message}
				</small>
			</div>
            <div className='input-container flex-container'>
				<label>Message</label>
				<textarea
					className='form-input form-textarea'
					name='message'
                    type='text'
					placeholder='Enter your message'
					{...register('message', registerOptions.message)}
				/>
				<small className='error'>
					{errors?.message && errors.message.message}
				</small>
			</div>
            <button className="submit-button">
                Send Message
            </button>
		</form>
	);
};

export default ContactForm;
