import { Models } from "appwrite";
import Loader from "./Loader";
import { searchPosts } from "@/lib/appwrite/api";
import GridPostList from "./GridPostList";

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchPosts: Models.Document[];
}


const SearchResults = ({ isSearchFetching && searchPosts }: SearchResultsProps) => {

  if(isSearchFetching) return <Loader />
  if(searchPosts.documents.lenght > 0) {
  if(searchedPosts && searchedPosts.documents.lenght > 0) {
    return (
      <GridPostList posts={searchedPosts.documents} />
    )
  }
  return (
    <p className="text-light-4 mt-10 text-center w-full">No results found</p>
  )
}

export default SearchResults