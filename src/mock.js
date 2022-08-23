function getID() {
    let id = 1;
    return function() {
        return id++;
    }
}

const idGenerator = getID();

export const product = {
  name: "3D принтер",
  article: "2840367",
  price: 33333,
  oldPrice: 33334,
  delivery: "1 апреля",
  image: {
    src: "https://i.ibb.co/gPCq1G4/image.png",
    alt: "3D принтер"
  },
  description:
    "это «текст-рыба», часто используемый в печати и веб-дизайне. Lorem Ipsum является стандартной «рыбой» для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.",
  comments: [
      {
          id: idGenerator(),
          name: "Олег",
          text: "Мне понравилось!"
      },
      {
          id: idGenerator(),
          name: "Богданчик",
          text: "Мне не понравилось!"
      },
      {
          id: idGenerator(),
          name: "Далия Гиллеспи",
          text: "Отстой. На костёр."
      },
      {
          id: idGenerator(),
          name: "Машуля",
          text: "Товар очень качественный, купила бы 2, но мало места дома."
      },
      {
          id: idGenerator(),
          name: "Кингслэйер",
          text: "Мне понравилось. Особенно хорошо бить этой фигнёй по голове."
      }
  ]
};
