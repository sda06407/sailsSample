describe('about Post model operation.', function() {
      it('post module should success.', async(done) => {
        try {
          let posts
          posts.id.should.be.INTEGER;
          done();
        } catch (e) {
          done(e);
        }
      });

      describe('find user', () => {
        let testFind;
        before(async(done) => {
          testFind = await User.create({
            username: 'test',
            email: 'test@gmail.com',
            age: 18
          });
          done();
        });

        it('should success.', async(done) => {
          try {
            // let users;
            let findUser;
            findUser.id.should.be.equal(testFind.id);
            done();
          } catch (e) {
            done(e);
          }
        });
      });

      describe('Create title', () => {
        let postfind;
        before(async(done) => {
          postfind = await Post.create({
            title: 'test';
            content: 'test content';
          });
          done();
        });

        it('should success', async(done) => {
          let findPost;
          try {
            findPost.id.should.be.equal(postfind.id);
            done();
          } catch (e) {
            done(e);
          }
        });
      });
