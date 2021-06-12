**API**

1) Put call for a specific user returns 201 instead of 204 (API doc),TC 401 testcase [Major]
2) Updating a user with an invalid json returns 201 instead of 400, TC402 test case[Major]

**UI**

1. id of warrior username has a typo -`worrior_username`o instead of a [Trivial]
2. Create warrior in landing page is a button,but the dom represent it as anchor tag(hyperlink)[Trivial]
3. close icon in modal dialog is not getting closed properly in automation tests[Needs further investigation -icon has a tag aria-hidden needed js click]
4. Tool tip in the pages doesnot provide information about the page,could be removed[Minor]
5. Leaderboard page is not paginated[Minor]
6. Progress bar didnt shown progress in TC006 scenario [Major]
