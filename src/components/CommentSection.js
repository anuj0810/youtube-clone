// dummy data for nested commnet
const commentData = [
  {
    name: "Anuj Agarwal",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
    replies: [],
  },
  {
    name: "Anuj Agarwal1",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
    replies: [
      {
        name: "Anuj Agarwal replied",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
        replies: [
          {
            name: "Anuj Agarwal",
            text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
            replies: [],
          },
        ],
      },
      {
        name: "Anuj Agarwal",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
        replies: [],
      },
    ],
  },
  {
    name: "Anuj Agarwal2",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
    replies: [
      {
        name: "Anuj Agarwal",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
        replies: [],
      },
    ],
  },
  {
    name: "Anuj Agarwal3",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
    replies: [],
  },
  {
    name: "Anuj Agarwal4",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
    replies: [
      {
        name: "Anuj Agarwal3",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
        replies: [],
      },
    ],
  },
];

const CommentSection = () => {
  return <CommentList CommentData={commentData} />;
};

const CommentList = ({ CommentData }) => {
  return CommentData.map((item) => {
    return (
      <>
        <div>
          <Comment CommentData={item} />
        </div>
        <div className="ml-11">
          {item.replies.length !== 0 && (
            <CommentList CommentData={item.replies} />
          )}
        </div>
      </>
    );
  });
};

const Comment = ({ CommentData }) => {
  const { name, text } = CommentData;

  return (
    <div className="w-[1200px] flex mb-2 ml-2 p-2 bg-gray-50 rounded-sm border-l-2 border-black">
      <img
        className="h-12 inline"
        alt="hamburger"
        src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
      />
      <div>
        <p >{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CommentSection;
