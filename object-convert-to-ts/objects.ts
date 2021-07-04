const FullTime = "FullTime";
const Temporary = "Temporary";

exports const FullTime = FullTime;
exports const Temporary = Temporary;

exports const introducePerson = (person: object) =>
  `Hello ${person.name.first : string} ${person.name.middle: string} ${person.name.last: string}`;

exports const isFulltimeEmployee = (person:object) => person.status === FullTime;

exports const personToString = (
  person = {
    status: FullTime,
    name: {
      first: "unknown",
      last: "unknown",
    },
    profession: "unknown",
  }
) => JSON.stringify(person, null, 2);

exports const getProfessions = personMap =>
  Object.values(personMap)
    .map(({ profession }) => profession)
    .join("\n");

// source - https://www.youtube.com/watch?v=S2L4fatK0Ek&ab_channel=JackHerrington
