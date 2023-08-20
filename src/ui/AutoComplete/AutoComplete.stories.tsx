import AutoComplete, {
  DataSourceType,
  AutoCompleteProps,
} from "./AutoComplete";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "UI/AutoComplete",
  component: AutoComplete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AutoComplete>;

export default meta;

type Story = StoryObj<typeof meta>;

const lakers = [
  "bradley",
  "pope",
  "caruso",
  "cook",
  "cousins",
  "james",
  "AD",
  "green",
  "howard",
  "kuzma",
  "McGee",
  "rando",
];

// const handleFetch = (query: string) => {
//   return lakers
//     .filter((name) => name.includes(query))
//     .map((name) => ({ value: name }));
// };

// const handleFetch = (
//   query: string
// ): DataSourceType<Record<string, never>>[] => {
//   return lakers
//     .filter((name) => name.includes(query))
//     .map((name) => ({ value: name }));
// };

const handleFetch = (query: string): DataSourceType[] => {
  return lakers
    .filter((name) => name.includes(query))
    .map((name) => ({ value: name } as DataSourceType));
};

const renderOption = (item: DataSourceType) => {
  return <h2>Name:{item.value}</h2>;
};
export const Default: Story = {
  args: {
    fetchSuggestions: handleFetch,
    onSelect: action("selected"),
    renderOption: renderOption,
  },
};

const lakersWithNumber = [
  { value: "bradley", number: 11 },
  { value: "pope", number: 1 },
  { value: "caruso", number: 4 },
  { value: "cook", number: 2 },
  { value: "cousins", number: 15 },
  { value: "james", number: 23 },
  { value: "AD", number: 3 },
  { value: "green", number: 14 },
  { value: "howard", number: 39 },
  { value: "kuzma", number: 0 },
];
interface LakerPlayerProps {
  value: string;
  number?: number;
}

// const handleComplexFetch = (query: string) => {
//   return lakersWithNumber.filter((player) => player.value.includes(query));
// };
// const handleComplexFetch = (
//   query: string
// ): DataSourceType<LakerPlayerProps>[] => {
//   return lakersWithNumber.filter((player) => player.value.includes(query));
// };
const handleComplexFetch = (
  query: string
): DataSourceType<LakerPlayerProps>[] => {
  return lakersWithNumber.filter((player) => player.value.includes(query));
};

const renderComplexOption = (item: DataSourceType<LakerPlayerProps>) => {
  return (
    <>
      <h2>Name:{item.value}</h2>
      <p>Number:{item.number}</p>
    </>
  );
};

export const CustomSuggestions: AutoCompleteProps<LakerPlayerProps> = {
  fetchSuggestions: handleComplexFetch,
  onSelect: action("selected"),
  renderOption: renderComplexOption,
  placeholder: "Enter the name of lakers",
};

const handlePromiseFetch = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then((res) => res.json())
    .then(({ items }) => {
      return items
        .slice(0, 10)
        .map((item: any) => ({ value: item.login, ...item }));
    });
};
interface GithubUserProps {
  login: string;
  avatar_url: string;
  url: string;
}

const renderGithubOption = (item: DataSourceType<GithubUserProps>) => {
  return (
    <>
      <h2>Name:{item.value}</h2>
      <p>Url:{item.url}</p>
    </>
  );
};

export const FetchOptions: AutoCompleteProps<GithubUserProps> = {
  fetchSuggestions: handlePromiseFetch,
  onSelect: action("selected"),
  renderOption: renderGithubOption,
  placeholder: "Github username",
};
