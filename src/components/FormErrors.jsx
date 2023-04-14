const FormErrors = ({ errors }) => {
  if (errors.length > 0) {
    return (
      <div className="form-errors">
        {errors.map((error, key) => (
          <small key={key} className="text-danger">
            ● {error[0]}: {error[1]} <br />
          </small>
        ))}
      </div>
    );
  }
  return null;
};

export default FormErrors;
