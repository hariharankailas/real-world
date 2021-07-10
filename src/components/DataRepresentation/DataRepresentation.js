/***********************************************************************************************
 * File : DataRepresentation 
 * Desc : Fetch Comments and show the data in a tabular form 
 * Author: Hariharan Kailas
 * Date: 10-Jul-2021
 ***********************************************************************************************/
import React, { useState, Profiler } from 'react';
import { jsonplaceholder } from '../../api/jsonPlaceholder';
import './DataRepresentation.scss';
const DataRepresentation = ({ commentCb }) => {
    const [commentList, setCommentList] = useState([]);
    /***************************************
    * Desc: Load on comments from api
    * Date: 08-July-2021
    * ********************************/
    const loadComments = async () => {
        const response = await jsonplaceholder.get("/comments");
        setCommentList(response.data);
    }
    /***************************************
     * Desc: render table content
     * Date: 08-July-2021
     * ********************************/
    const renderTable = () => {
        return (
            <div className="table-responsive ">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableRows()}
                    </tbody>
                </table>
                )
            </div>
        );
    }
    /***************************************
     * Desc: render table rows content
     * Date: 08-July-2021
     * ********************************/
    const renderTableRows = () => {
        return (
            <>
                {commentList.map(comment => <tr key={comment.id}>
                    <th scope="row">{comment.id}</th>
                    <td>{comment.name}</td>
                    <td>{comment.email}</td>
                    <td>{comment.body}</td>
                </tr>)
        
                }
            </>
        );
    }

    return (
        <div className="container">
            <div className="comment-control-container">
                <button type="button" id="fetchButton" className="btn btn-success btn-lg" onClick={ ()=> loadComments()}>
                    Fetch Comments
                </button>
                <button type="button"  id="clearButton" className="btn btn-danger btn-lg" onClick={ () => setCommentList([])}>
                    Clear
                    </button>
                </div>
            {commentList.length > 0 &&
                <Profiler id="commentsProfiler" onRender={commentCb}>
                    {renderTable()}
                </Profiler>
            }
            {commentList.length === 0 &&
                <h2 className="display-5 text-center">No Comments to Show</h2>
            }
        </div>
    );
}

export default DataRepresentation;