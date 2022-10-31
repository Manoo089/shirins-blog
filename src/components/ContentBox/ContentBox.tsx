import React, { PropsWithChildren } from "react";

type ContentBoxTypes = PropsWithChildren<{}>;

const ContentBox = ({}: ContentBoxTypes) => {
  return (
    <article className="ContentBox">
      <div className="ContentBox__header">
        <h3>Überschrift</h3>
      </div>

      <div className="ContentBox__main">
        <h3>Main</h3>
      </div>

      <div className="ContentBox__footer">
        <h3>Footer</h3>
      </div>
    </article>
  );
};

export default ContentBox;
