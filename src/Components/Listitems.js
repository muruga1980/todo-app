import React from "react";
import { TfiCheck, TfiAlert, TfiClose,TfiPencilAlt } from "react-icons/tfi";

import FlipMove from "react-flip-move";

const Listitems = (props) => {
  return (
    <>
      <div className="form-center">
      <FlipMove
              duration={300}
              easing="ease-out"
              enterAnimation="fade"
              leaveAnimation={null}
              typeName={null}
            >
        <article className="list-items">            
          {props.currentTask.map((listItems, id) => {
            return (             
              <div className="card" key={id}>
                <div className="card-body">
                  <p style={{textDecoration: listItems.isCompleted? "line-through": "none"}}>
                    <span className="badge rounded-pill bg-primary me-3">{id}</span>
                    {listItems.task}
                  </p>
                </div>

                <div className="card-footer d-grid gap-2 d-md-flex justify-content-md-end">

                  <button 
                    className="btn btn-danger TfiCheck" onClick={() => props.handleEdit(listItems.id)}>  <TfiPencilAlt /> Edit
                  </button>
                    <button 
                        disabled={listItems.isCompleted ? true : false} className="btn btn-primary TfiCheck" onClick={() => props.doneTask(listItems.id)}>
                        <TfiCheck /> Done
                      </button>
                    <button className="btn btn-danger TfiCheck"
                       onClick={() => props.deleteTask(listItems.id)}>
                      <TfiClose /> Delete
                    </button>
                </div>
              </div>
            
            );
          })}

        {props.currentTask.length < 1 && 
        <div className="card alert alert-warning ">
                <div className="card-body text-danger  text-center">
            <div> <TfiAlert /> <br/> No List Added !!!</div>
                </div>
            </div> 
        }
        </article>
        </FlipMove>
      </div>
    </>
  );
};

export default Listitems;
