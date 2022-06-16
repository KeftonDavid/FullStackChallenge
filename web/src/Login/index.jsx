import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
const Input = props => (
    <input {...props} className="w-full bg-transparent p-4 border rounded-xl border-onix text-lg outline-none focus:border-platinum"/>
)

const validationSchema = yup.object({
    email: yup.string().required('Digite seu email!').email('Email inválido'),
    password: yup.string().required('Digite sua senha!')
})

export function Login({ signInUser }){
    const formik = useFormik({
        onSubmit: async (values) => {
            const res = await axios.get('http://localhost:9901/login', {
                auth: {
                    username: values.email,
                    password: values.password
                }
            })
            signInUser(res.data);
        },
        validationSchema,
        validateOnMount: true,
        initialValues: {
            email: '',
            password: ''
        }
    })
    return (
        <div className="h-full flex flex-col justify-center p-12 space-y-6">
            <h1 className="text-3xl">Acesse sua conta!</h1>
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div className='space-y-2'>
                    <Input 
                        value={formik.values.email} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                        type="text" 
                        name="email" 
                        placeholder="E-mail"
                        disabled={formik.isSubmitting} />
                        {(formik.touched.email && formik.errors.email) && (
                            <div className='text-red-500 text-sm'>{formik.errors.email}</div>  )}
                </div>
                
                <div className='space-y-2'>
                    <Input 
                        value={formik.values.password} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                        type="password" 
                        name="password" 
                        placeholder="Senha"
                        disabled={formik.isSubmitting} />
                        {(formik.touched.password && formik.errors.password) && (
                            <div className='text-red-500 text-sm'>{formik.errors.password}</div>  )}
                </div>

                <button type='submit'
                disabled={formik.isSubmitting || !formik.isValid} className="w-full bg-birdBlue py-4 rounded-full disabled:opacity-50 text-lg"
                >{formik.isSubmitting ? 'Enviando...' : 'Entrar'}</button>
            </form>

            <span className="text-sm text-silver">
                Não tem conta? <a className="text-birdBlue" href="">Inscreva-se!</a>
            </span>
        </div>
    )
}