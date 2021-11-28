import React, { useState } from "react";

const replaceAll = (str, from, to) => {
  return str.split(from).join(to);
}

export const MailAddress = ({mail, children}) => {
  let def = `mailto:${mail}`
  def = replaceAll(def, '.', '[##]')
  def = replaceAll(def, 'ail', '[^^]')
  def = replaceAll(def, '@', '[;;]')
  const [obf, setObf] = useState(def)

  const appear = (e) => {
    e.preventDefault();

    console.log(obf, typeof obf)

    let mail = obf;
    mail = replaceAll(mail, '[##]', '.');
    mail = replaceAll(mail, '[^^]', 'ail');
    mail = replaceAll(mail, '[;;]', '@');
    setObf(mail);
  }

  return (
    <a
      href={obf}
      onMouseOver={appear}
      onFocus={appear}
    >
      {children}
    </a>
  );
}