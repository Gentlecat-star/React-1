import React from "react";

function Comments({ comments }) {
    const extraMessage = comments && comments.length === 0 ? <span>Будь первым. Поделись впечатлениями</span> : "";
  return (
      <React.Fragment>
          <h2>Комментарии</h2>
          {extraMessage}
          <ul>
              {comments && comments.map(({ id, name, text }) => (
                  <li key={id}>
                      <b>{name}</b>
                      <p>{text}</p>
                  </li>
              ))}
          </ul>  
      </React.Fragment>
  );
}

export default Comments;
