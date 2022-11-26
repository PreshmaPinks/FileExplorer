import React from "react";

const Folder = ({ explorer }) => {
  console.log("explorer", explorer);

  if (explorer.isFolder) {
    return (
      <div>
        <div>
          <span>📁{explorer.name}</span>
        </div>
        <div>
          {explorer.items.map((exp) => {
            return <span>{exp.name}</span>;
          })}
        </div>
      </div>
    );
  } else {
    return <span>📄{explorer.name}</span>;
  }
};

export default Folder;
