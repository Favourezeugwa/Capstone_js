const baseurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/'
const appid ="qE24UJ9FZb733QHS4Jjx";

const getLikes = async () => {
    let data = await fetch(`${baseurl}${appid}/likes`);
    data = await data.json();
    return data;
}

const postLikes = async (showId, element) => {
    await fetch(`${baseurl}${appid}/likes`, {
        method: 'POST',
        body: JSON.stringify({
            item_id: showId,
        }),
        headers: {
            'Content-type' : 'application/json',
        },
    });
const likesArray = await getLikes();
likesArray.map((a) => {
    if (a.item_id === showId) {
        element.innerHTML = `${a.likes}`;
    }
    return a;
})
}

export {postLikes, getLikes};