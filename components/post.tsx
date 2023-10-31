import { Post } from "@prisma/client"
import { format } from "date-fns"
import { CalendarCheck, MessageCircle, User } from "lucide-react"

const Post: React.FC<{ data: Post }> = ({data: {id, author, title, text, createdAt}}) => {
  return (
    <div className="shadow-xs grid gap-2 rounded border border-gray-200 bg-slate-100 p-2">
      <div className="text-lg font-medium">{title}</div>
      <div className="text-sm">
        {text}
      </div>
      <div className="grid grid-cols-6 border-t pt-2 text-sm">
        <div className="col-span-3 flex items-center">
          <User size={20} className="mr-2" />{author}
        </div>
        <div className="flex items-center">
          <MessageCircle size={20} className="mr-2" />
          0
        </div>
        <div className="flex items-center col-span-2">
          <CalendarCheck size={20} className="mr-2" />
          {format(createdAt, "PPp")}
        </div>
      </div>
    </div>
  )
}

export { Post }
