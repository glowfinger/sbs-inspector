import * as yup from "yup";

let siteLocationSchema = yup.object({
  floor: yup.string().required(),
  area: yup.string().required(),
  name: yup.string().required(),
});

export default siteLocationSchema;
