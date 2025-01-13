import { Quiz } from '../types/quiz';

export const mockQuizzes: Quiz[] = [
  {
    id: '1',
    title: 'JavaScript Fundamentals',
    description: 'Test your knowledge of JavaScript basics',
    questions: [
      {
        id: '1',
        text: 'What is the result of typeof null?',
        options: ['undefined', 'object', 'null', 'number'],
        correctAnswer: 1
      },
      {
        id: '2',
        text: 'Which method removes the last element from an array?',
        options: ['pop()', 'push()', 'shift()', 'unshift()'],
        correctAnswer: 0
      },
      {
        id: '3',
        text: 'What is the output of 3 + "3"?',
        options: ['6', '33', 'NaN', 'undefined'],
        correctAnswer: 1
      },
      {
        id: '4',
        text: 'Which operator is used for strict equality comparison?',
        options: ['==', '===', '=', '!='],
        correctAnswer: 1
      },
      {
        id: '5',
        text: 'What is the scope of a variable declared with let?',
        options: ['Global scope', 'Function scope', 'Block scope', 'Module scope'],
        correctAnswer: 2
      }
    ],
    createdBy: 'user1',
    createdAt: new Date()
  },
  {
    id: '2',
    title: 'React Essentials',
    description: 'Test your understanding of React core concepts',
    questions: [
      {
        id: '1',
        text: 'What hook is used to manage state in functional components?',
        options: ['useEffect', 'useState', 'useContext', 'useReducer'],
        correctAnswer: 1
      },
      {
        id: '2',
        text: 'What is the virtual DOM?',
        options: [
          'A direct copy of the real DOM',
          'A lightweight copy of the real DOM',
          'A JavaScript engine',
          'A browser extension'
        ],
        correctAnswer: 1
      },
      {
        id: '3',
        text: 'Which lifecycle method is called after a component mounts?',
        options: ['componentDidMount', 'componentWillMount', 'componentDidUpdate', 'render'],
        correctAnswer: 0
      },
      {
        id: '4',
        text: 'What is the purpose of keys in React lists?',
        options: [
          'To style list items',
          'To uniquely identify elements',
          'To add event listeners',
          'To improve SEO'
        ],
        correctAnswer: 1
      },
      {
        id: '5',
        text: 'What is the correct way to update state that depends on previous state?',
        options: [
          'setState(state + 1)',
          'setState(prevState => prevState + 1)',
          'setState({state: state + 1})',
          'state = state + 1'
        ],
        correctAnswer: 1
      }
    ],
    createdBy: 'user2',
    createdAt: new Date()
  },
  {
    id: '3',
    title: 'TypeScript Basics',
    description: 'Learn the fundamentals of TypeScript',
    questions: [
      {
        id: '1',
        text: 'What is the purpose of TypeScript?',
        options: [
          'To replace JavaScript',
          'To add static typing to JavaScript',
          'To improve runtime performance',
          'To reduce file size'
        ],
        correctAnswer: 1
      },
      {
        id: '2',
        text: 'What is the type of an array of numbers in TypeScript?',
        options: ['Array<number>', 'number[]', 'Both A and B', 'Number[]'],
        correctAnswer: 2
      },
      {
        id: '3',
        text: 'What does the "any" type mean in TypeScript?',
        options: [
          'The variable can only hold numbers',
          'The variable can hold any type',
          'The variable is undefined',
          'The variable is null'
        ],
        correctAnswer: 1
      },
      {
        id: '4',
        text: 'What is an interface in TypeScript?',
        options: [
          'A class definition',
          'A type definition for objects',
          'A function declaration',
          'A module system'
        ],
        correctAnswer: 1
      },
      {
        id: '5',
        text: 'What is the difference between "type" and "interface"?',
        options: [
          'They are exactly the same',
          'Types can use unions, interfaces cannot',
          'Interfaces can be extended, types cannot',
          'Types are faster than interfaces'
        ],
        correctAnswer: 1
      }
    ],
    createdBy: 'user3',
    createdAt: new Date()
  },
  {
    id: '4',
    title: 'Web Development Fundamentals',
    description: 'Test your knowledge of web development basics',
    questions: [
      {
        id: '1',
        text: 'What does HTML stand for?',
        options: [
          'Hyper Text Markup Language',
          'High Tech Modern Language',
          'Hyper Transfer Markup Language',
          'Home Tool Markup Language'
        ],
        correctAnswer: 0
      },
      {
        id: '2',
        text: 'Which CSS property is used to change the text color?',
        options: ['text-color', 'color', 'font-color', 'text-style'],
        correctAnswer: 1
      },
      {
        id: '3',
        text: 'What is the purpose of media queries in CSS?',
        options: [
          'To play media files',
          'To create responsive designs',
          'To query databases',
          'To load external resources'
        ],
        correctAnswer: 1
      },
      {
        id: '4',
        text: 'What is the difference between GET and POST methods?',
        options: [
          'GET is faster than POST',
          'POST is more secure for sending data',
          'GET can send more data than POST',
          'There is no difference'
        ],
        correctAnswer: 1
      },
      {
        id: '5',
        text: 'What is the purpose of the DOCTYPE declaration?',
        options: [
          'To link JavaScript files',
          'To tell the browser which version of HTML is being used',
          'To define the document title',
          'To include CSS styles'
        ],
        correctAnswer: 1
      }
    ],
    createdBy: 'user4',
    createdAt: new Date()
  }
];