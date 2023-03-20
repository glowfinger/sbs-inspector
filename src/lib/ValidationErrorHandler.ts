export default function validationErrorHandler(error: any) {
  let errors = {};

  error.inner.forEach((e) => {
    errors[e.path] = e.message;
  });

  return errors;
}
