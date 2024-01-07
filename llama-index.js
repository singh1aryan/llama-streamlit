lyft_engine = lyft_index.as_query_engine(similarity_top_k=3)
articles_engine = articles_index.as_query_engine(similarity_top_k=3)


query_engine_tools = [
    QueryEngineTool(
        query_engine=lyft_engine,
        metadata=ToolMetadata(
            name="art_of_thinking_clearly",
            description="This provides the information about the book the art of thinking clearly"
            "Use a detailed plain text question as input to the tool.",
        ),
    ),
    QueryEngineTool(
        query_engine=articles_engine,
        metadata=ToolMetadata(
            name="articles",
            description="This provides the information about the new google pixel 8"
            "It also provides the information about the microsoft and google doing"
            "It provides information about how apple stocks are doing"
            "Use a detailed plain text question as input to the tool."

        ),
    ),
    QueryEngineTool(
        query_engine=cal_engine,
        metadata=ToolMetadata(
            name="google_calendar",
            description="this can create , update and delete events in google calendar"
        ),
    )
]

agent = OpenAIAgent.from_tools(query_engine_tools, verbose=True)

val = agent.chat_history
print(val)
