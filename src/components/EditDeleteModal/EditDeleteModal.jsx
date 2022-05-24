import "./EditDeleteModal.css";
import { useUser } from "../../Contexts/Index";
import { EditPostModal } from "../Index";
import { useState } from "react";
export const EditDeleteModal = ({ value }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const { item } = value;
  const { DeleteUserPost } = useUser();
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
          DeleteUserPost(item);
        }}
      >
        Delete
      </button>
      {editModalOpen && <EditPostModal value={{ item, editModalOpen, setEditModalOpen }} />}
    </div>
  );
};
