import AutoResizeTextarea from "./AutoResizeTextArea";
import Avatar from "./Avatar";
import { SectionSubText } from "./SectionHeadings";

export default function Highlights({ children }) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      <Avatar />
      <div className="md:col-span-2 overflow-hidden flex flex-col justify-center">
        <AutoResizeTextarea
          className="md:text-7xl text-4xl"
          placeholder="Click to add title"
        />
        <SectionSubText placeholder="Click to add subtitle" />
      </div>

      <div>
        <AutoResizeTextarea
          className="font-semibold w-full"
          placeholder="Your name here"
        />
        <AutoResizeTextarea className="text-sm" placeholder="Enter email" />
      </div>

      <div className="md:col-span-2 flex flex-col gap-10">{children}</div>
    </div>
  );
}
