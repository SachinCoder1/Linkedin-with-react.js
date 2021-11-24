import React, { useEffect } from "react";
import styled from "styled-components";
import { getArticlesApi } from "../actions";
import { connect } from "react-redux";
import Posts from "./Posts";
import Input from "./Input";
import Loader from "./Loader";

function MainCenter(props) {
  useEffect(() => {
    const haveArticle = async () => {
      const waitArticle = await props.articles;
      return waitArticle;
    };
    haveArticle();
  }, []);

  return (
    <MainCont>
      <UpperCont>
        <Input />
      </UpperCont>
      {props.loading && <Loader />}
      <PostCont>
        {props.articles && props.articles ? (
          props.articles.map((article, key) => {
            return (
              props.articles && (
                <Posts
                  key={key}
                  title={article.actor.title}
                  date={article.actor.date.toDate().toLocaleDateString()}
                  description={article.description}
                  imageSrc={article.sharedImg}
                  video={article.video}
                  comment={article.comment}
                />
              )
            );
          })
        ) : (
          <Loader />
        )}
      </PostCont>
    </MainCont>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getArticles: dispatch(getArticlesApi()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainCenter);

const MainCont = styled.div``;
const UpperCont = styled.div``;
const PostCont = styled.div``;
