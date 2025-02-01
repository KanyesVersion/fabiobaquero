const PhoneLink = ({ phoneNumber }) => {
    return (
      <a href={`tel:${phoneNumber}`} className="underline decoration-dotted">
        {phoneNumber}
      </a>
    );
};

export default PhoneLink