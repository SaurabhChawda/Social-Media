import "./EditDeleteModal.css";
import { EditPostModal } from "../Index";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeletePostHandler } from "../../features/Posts/PostSlice.js";

export const EditDeleteModal = ({ value }) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const { item, editDeleteModal, setEditDeleteModal } = value;
  return (
    <div className="edit-modal">
      <button
        className="edit-modal__btn--demo edit-modal__btn--yes"
        onClick={() => {
          setEditModalOpen(!editModalOpen);
        }}
      >
        Edit
      </button>
      <hr></hr>
      <button
        className="edit-modal__btn--demo edit-modal__btn--no"
        onClick={() => {
          dispatch(DeletePostHandler({ post: item, user: loggedInUser }));
          setEditDeleteModal(!editDeleteModal);
        }}
      >
        Delete
      </button>
      {editModalOpen && (
        <EditPostModal value={{ item, editDeleteModal, setEditDeleteModal, editModalOpen, setEditModalOpen }} />
      )}
    </div>
  );
};
