import { postLikes } from "./likescounter";

const addLike = () => {
    document.addEventListener('click', (e) => {
        const clickedElement = e.target;
        const likescounter = clickedElement.parentNode.nextElemrntSibling;
        const showId = Number(clickedElement.parentNode.parentNode.id);
        if ( clickedElement.id === 'liked-icon') {
            postLikes(showId, likescounter);
        }
    });
};

export default addLike;