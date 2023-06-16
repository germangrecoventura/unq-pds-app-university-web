const FormErrors = ({ errors }) => {
  if (errors.length > 0) {
    return (
      <div class="alert alert-danger" role="alert">
        {errors.map((error, key) => (
          <small key={key} className="text">
            ● {error[0]}: {error[1]} <br />
          </small>
        ))}
      </div>
    );
  }
  return null;
};

export default FormErrors;
