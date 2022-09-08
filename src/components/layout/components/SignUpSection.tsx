import { Form } from "@components/Form";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { ContentSection } from "./ContentSection";

interface FormState {
    email: string
    phone: string
    business: string
}
export function SignUpSection (): JSX.Element {
    const router = useRouter()
    const [formState, setFormState] = useState<FormState>({
        email: '',
        phone: '',
        business: ''
    })

    const [loading, setLoading] = useState<boolean>(false)

    function onInputChange({target: {name, value}}: ChangeEvent<HTMLInputElement>): void {
        setFormState({...formState, [name]: value })
    }

    async function handleOnformSubmit (e: any): Promise<void> {
        setLoading(true)
        e.preventDefault()

         setTimeout(() => {
             setLoading(true)
             void router.push(`/partners/${formState.phone.trim()}`)
         }, 1500)

        try{
           await fetch('/api/partners', {
              method: 'POST',
              body: JSON.stringify({...formState, referrals: 0})
          })
            setFormState({
                phone: '',
                business: '',
                email: ''
            })
        }catch (e) {
           console.error(e)
        }

    }
    return (
       <section className="mt-10 flex flex-col  md:flex-row-reverse">
 <Form
        onSubmit={(e) => void handleOnformSubmit(e)}
        testId='form-collection-home-page'
        >
                <Form.Group groupName="Email" testId="email-group">
                    <Form.Input 
                        name='email'
                         value={formState.email}
                        placeHolder="Email"
                        onChange={(e) =>  onInputChange(e)}
                        testId='email-input-field'
                        type="email"
                    />
                </Form.Group>
                <Form.Group groupName="Business name" testId="business-group">
                    <Form.Input 
                        name='business'
                         value={formState.business}
                        placeHolder="Business name"
                        onChange={(e) =>  onInputChange(e)}
                        testId='business-input-field'
                        type="text"
                    />
                </Form.Group>
                <Form.Group groupName="Phone number" testId="phone-group">
                    <Form.Input 
                        name='phone'
                         value={formState.phone}
                        placeHolder="Phone number"
                        onChange={(e) =>  onInputChange(e)}
                        testId='phone-input-field'
                        type="number"
                    />
                </Form.Group>
                <Form.Button 
                text={!loading ? "Become a partner" :  "loading..."} 
                classname="flex w-full bg-imagyne-primary text-white text-lg justify-center  py-3 px-2" 
                testId="form-cta"
                 />
        </Form>
        <ContentSection />
       </section>
    )
}