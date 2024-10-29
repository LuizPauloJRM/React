function Button(props) {
  return (
    <button {...props} className="bg-green-950 p-2 rounded-md text-white">
      {props.children}
    </button>
  );
}

export default Button;
