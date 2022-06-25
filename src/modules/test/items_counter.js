const data = [];
const getItems = () => {
  const item1 = {
    title: 'Moreton Bay United - Gold Coast United FC',
    competition: 'AUSTRALIA: NPL Queensland',
    matchviewUrl: 'https://www.scorebat.com/embed/matchview/1160011/?token=MjA5OThfMTY1NjE0NzY1M19mMGQ5MDJmZDVkY2JiZmFlZGIxOGE4MjAxOTIxMzIwZGJjNzRkMzA5',
    competitionUrl: 'https://www.scorebat.com/embed/competition/australia-npl-queensland/?token=MjA5OThfMTY1NjE0NzY1M19mMGQ5MDJmZDVkY2JiZmFlZGIxOGE4MjAxOTIxMzIwZGJjNzRkMzA5',
    thumbnail: 'https://www.scorebat.com/og/m/og1160011.jpeg',
    date: '2022-06-25T08:30:00+0000',
    videos: [
      {
        id: '62b58309c0996',
        title: 'Live Stream',
        embed: "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https://www.scorebat.com/embed/v/SHBldjBNWGk5NEg5ZDE1bit2SUpIZz09/?token=MjA5OThfMTY1NjE0NzY1M19mMGQ5MDJmZDVkY2JiZmFlZGIxOGE4MjAxOTIxMzIwZGJjNzRkMzA5&utm_source=api&utm_medium=video&utm_campaign=apifd' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>",
      },
    ],
  };
  const item2 = {
    title: 'Southside Eagles - Caboolture',
    competition: 'AUSTRALIA: Queensland Premier League',
    matchviewUrl: 'https://www.scorebat.com/embed/matchview/1161367/?token=MjA5OThfMTY1NjE0NzY1M19mMGQ5MDJmZDVkY2JiZmFlZGIxOGE4MjAxOTIxMzIwZGJjNzRkMzA5',
    competitionUrl: 'https://www.scorebat.com/embed/competition/australia-queensland-premier-league/?token=MjA5OThfMTY1NjE0NzY1M19mMGQ5MDJmZDVkY2JiZmFlZGIxOGE4MjAxOTIxMzIwZGJjNzRkMzA5',
    thumbnail: 'https://www.scorebat.com/og/m/og1161367.jpeg',
    date: '2022-06-25T08:00:00+0000',
    videos: [
      {
        id: '62b58309c34aa',
        title: 'Live Stream',
        embed: "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https://www.scorebat.com/embed/v/UUpWckVaT2FIdmVQbmxsRDFUUlE2Zz09/?token=MjA5OThfMTY1NjE0NzY1M19mMGQ5MDJmZDVkY2JiZmFlZGIxOGE4MjAxOTIxMzIwZGJjNzRkMzA5&utm_source=api&utm_medium=video&utm_campaign=apifd' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>",
      },
    ],
  };
  data.push(item1);
  data.push(item2);
  return data;
};
export default getItems;