const getDb = () => localStorage.getItem('selected_course');

const upDateDb = cart => localStorage.setItem('selected_course', JSON.stringify(cart));

const addToDB = id => {
    const exists = getDb();
    let selected_course = {};
    if (!exists) {
      selected_course[id] = 1;
    }
    else {
      selected_course = JSON.parse(exists);
      if (selected_course[id]) {
        selected_course[id] = 1;
      }
      else {
        selected_course[id] = 1;
      }
    }
    upDateDb(selected_course);
  }

export { getDb, addToDB, upDateDb}