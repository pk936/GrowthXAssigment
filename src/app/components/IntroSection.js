import AutoResizeTextarea from "./AutoResizeTextArea";
import Avatar from "./Avatar";
import { SectionSubText } from "./SectionHeadings";

export default function Highlights({ children }) {
  //   const { sectionLists } = useContext(AppContext);

  //   const { name, email, title, subTitle, avatar } = data;

  //   console.log("user", data);

  //   const { summary } = data;

  //   function onBlur(key, e) {
  //     updateSection({
  //       id: "summary",
  //       data: {
  //         ...data,
  //         [key]: e.target.value,
  //       },
  //     });
  //   }

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      <Avatar />
      <div className="md:col-span-2 overflow-hidden flex flex-col justify-center">
        <AutoResizeTextarea
          className="border-none bg-transparent md:text-7xl text-4xl"
          placeholder="Click to add title"
          // onBlur={(e) => onBlur("title", e)}
          // value={title}
        />
        <SectionSubText placeholder="Click to add subtitle" />
      </div>

      <div>
        <input
          type="text"
          className="border-none bg-transparent px-2 font-semibold w-full"
          placeholder="Your name here"
        />
        <input
          type="text"
          className="border-none bg-transparent px-2 text-sm"
          placeholder="Enter email"
        />
      </div>

      <div className="md:col-span-2 flex flex-col gap-10">{children}</div>
    </div>
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-48 items-center">
        <div className="flex flex-col gap-10">
          <Avatar />
        </div>
        <div className="w-1/2 flex flex-col">
          <input
            type="text"
            className="border-none bg-transparent px-2 text-7xl"
            placeholder="Click to add title"
            // onBlur={(e) => onBlur("title", e)}
            // value={title}
          />

          <input
            type="text"
            className="border-none bg-transparent px-2 text-lg"
            placeholder="Click to add subtitle"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="border-none bg-transparent px-2 font-semibold"
          placeholder="Your name here"
        />
        <input
          type="text"
          className="border-none bg-transparent px-2 text-sm"
          placeholder="Enter email"
        />
      </div>
    </div>
  );
}
