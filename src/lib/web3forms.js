export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function getWeb3FormsKey() {
  return process.env.NEXT_PUBLIC_WEB3FORMS;
}

export async function submitWeb3Form(formData) {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    body: formData,
  });
  return response;
}
