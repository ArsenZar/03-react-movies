// src/components/Modal.tsx

import css from "./Modal.module.css";

export default function Modal() {
    return (
        <div className={css.backdrop}>
            <div className={css.modal}>
                <h2>Modal Title</h2>
                <p>This is some content inside the modal.</p>
            </div>
        </div>
    );
}
