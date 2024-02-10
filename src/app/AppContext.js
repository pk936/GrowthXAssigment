import { createContext, useState } from "react";

// const initialData = {
//   summary: {
//     name: "",
//     email: "",
//     title: "",
//     subTitle: "",
//     avatar: "",
//   },
// };

export const AppContext = createContext({});

export default function Context({ children }) {
  const [sectionsList, setSectionsList] = useState({
    data: {},
    isAnySectionEditing: false,
  });

  //   function updateSection({ id, data }) {
  //     setData({
  //       ...data,
  //       [id]: data,
  //     });
  //   }

  function onAddSection(id, data) {
    console.log("PROCESSING", id, data);
    setSectionsList({
      isAnySectionEditing: data?.isEditing,
      data: {
        ...sectionsList.data,
        [id]: data,
      },
    });
  }

  const finalData = {
    sectionsList,
    onAddSection,
    // updateSection,
  };

  return (
    <AppContext.Provider value={finalData}>{children}</AppContext.Provider>
  );
}
