import React from 'react'

function MailTo({children}) {
  return (
    <a href={`mailto:mauricioam91@gmail.com?subject=Job Info&body=Hi! I would like to offer you a position you might be interested.`}>{children}</a>
  )
};

export default MailTo;