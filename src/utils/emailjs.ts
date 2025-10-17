import emailjs from "@emailjs/browser";

// EmailJS configuration
export const emailjsConfig = {
  serviceId: "service_u3kmz0p",
  templateId: "template_l0o2o86",
  publicKey: "lk7Kg8cDbD1fq7oVm",
};

export const initEmailJS = () => {
  if (emailjsConfig.publicKey) {
    emailjs.init(emailjsConfig.publicKey);
  }
};

export const sendEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) => {
  if (
    !emailjsConfig.serviceId ||
    !emailjsConfig.templateId ||
    !emailjsConfig.publicKey
  ) {
    throw new Error(
      "EmailJS configuration is missing. Please check your environment variables."
    );
  }

  try {
    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_name: "E430 Technologies",
      },
      emailjsConfig.publicKey
    );

    return response;
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw error;
  }
};
