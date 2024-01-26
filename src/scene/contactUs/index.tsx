import {motion} from "framer-motion";
import {useForm} from "react-hook-form";
import { SelectedPage } from "../../shared/types";
import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.png";

type Props = {
  setSelectedPage : (value:SelectedPage) => void;
}

export const ContactUs = ({setSelectedPage}: Props) => {
  const inputStyles = `w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
  const {
    register,
    trigger,
    formState: {errors}
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if(!isValid){
      e.preventDefault();
    }
  }
  
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/* Header */}
            <motion.div 
            className="md:w-3/5"
            initial = "hidden"
                 whileInView="visible"
                 viewport={{once:true, amount:0.5}}
                 transition={{duration : 0.5}}
                 variants={{
                    hidden: {opacity:0, x: -50},
                    visible: {opacity:1, x:0}
                 }}
            >
              <h1 className='basis-3/5 font-montserrat text-3xl font-bold text-primary-500'>
                JOIN NOW</h1>

              <p>
                Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
              </p>
              
            </motion.div>
                 {/* Form and image */}
            <div className="mt-10 justify-between gap-8 md:flex">
              <motion.div
                  className="mt-10 basis3/5 md:mt-0"
                  initial = "hidden"
                  whileInView="visible"
                  viewport={{once:true, amount:0.5}}
                  transition={{duration : 0.5}}
                  variants={{
                    hidden: {opacity:0, y:50},
                    visible: {opacity:1, y:0}
                 }}
               >
                <form 
                   target="_blank"
                   onSubmit={onSubmit}
                   action= "https://formsubmit.co/agrawalmahak007@gmail.com"
                   method="POST">

                    <input 
                      className={inputStyles}
                      type = "text"
                      placeholder="NAME"
                      {...register("name", {
                        required:true,
                        maxLength:100,
                      })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-primary-500">
                        {errors.name.type === "required" && "This field is required."}
                        {errors.name.type === "maxLength" && "Max length is 100 characters."}
          

                      </p>
                    )}

                  <input 
                      className={inputStyles}
                      type = "email"
                      placeholder="EMAIL"
                      {...register("email", {
                        required:true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-primary-500">
                        {errors.email.type === "required" && "This field is required."}
                        {errors. email.type === "pattern" && "Invalid email"}
          

                      </p>
                    )}

                    
                  <textarea 
                      className={inputStyles}
                      placeholder="MESSAGE"
                      rows={4}
                      cols={50}
                      {...register("message", {
                        required:true,
                        maxLength: 2000,
                      })}
                    />
                    {errors.message && (
                      <p className="mt-1 text-primary-500">
                        {errors.message.type === "required" && "This field is required."}
                        {errors.message.type === "maxLength" && "Max length is 2000 characters."}
                      </p>
                    )} 

                    <button type="submit"
                       className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
                      SUBMIT
                    </button>
                </form>
              </motion.div>
                
                <motion.div
                className="relative mt-16 basis-2/5 md:mt-0"
                initial = "hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{delay:0.2 , duration : 0.5}}
                variants={{
                  hidden: {opacity:0, y:50},
                  visible: {opacity:1, y:0}
               }}
                >
                  <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                      <img className="w-full"
                      alt="contact-us-img"
                      src={ContactUsPageGraphic}/>
                  </div>

                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}
