from django.test import TestCase
from portfolio.models import *
from authentication.models import *
from django.test import Client

# Create your tests here.
class ModelTest(TestCase):
    def setUp(self) -> None:
        self.user = User.objects.create(
            first_name = "Phillip",
            last_name = "Mugisa",
            email = "phillipmugisa4@gmail.com",
        )


    def test_user_relations(self):
        # relations: Use, UserImage

        self.assertEqual(self.user, User.objects.first())
        self.assertEqual('%s %s' % ('Phillip', 'Mugisa'), User.objects.first().get_full_name())


    def test_blog_relations(self):
        # relations: Blog, BlogComment, BlogField, BlogStack, BlogImage
        blog = Blog.objects.create(
            title = "Blog test one",
            description = "Blog test one description"
        )

        self.assertTrue(
            Blog.objects.get(slug=blog.slug)
        )

        # testing comments
        blog_comment = BlogComment.objects.create(
            comment="Blog test one comment",
            blog=blog,
            user=self.user
        )
        self.assertEqual(blog_comment.blog, Blog.objects.first())
        self.assertEqual(blog_comment.user, self.user)

        # testing techs and stacks
        stacks = list()
        for stack_name in ['Django', 'React', 'Python']:
            stack = Stack.objects.create(name=stack_name)
            stacks.append(stack)
            blog.stack.add(stack)
            

        self.assertIn(blog.stack.get(pk=1), stacks)

        fields = list()
        for field_name in ['Web dev', 'mobile', 'server']:
            field = Field.objects.create(name=field_name)
            fields.append(field)
            blog.field.add(field)

        self.assertIn(blog.field.get(pk=1), fields)

        # comment of comment
        com_comment = ComComment.objects.create(
            reference_comment = blog_comment,
            user = self.user,
            comment = "This is a comment of a comment"
        )


    def test_project_relations(self):
        # relations: Blog, BlogComment, BlogField, BlogStack, BlogImage
        project = Project.objects.create(
            title = "Blog test one",
            description = "Blog test one description"
        )

        self.assertTrue(
            Project.objects.get(slug=project.slug)
        )
        
        # testing techs and stacks
        stacks = list()
        for stack_name in ['Django', 'React', 'Python']:
            stack = Stack.objects.create(name=stack_name)
            stacks.append(stack)
            project.stack.add(stack)
            

        self.assertIn(project.stack.first(), stacks)

        fields = list()
        for field_name in ['Web dev', 'mobile', 'server']:
            field = Field.objects.create(name=field_name)
            fields.append(field)
            project.field.add(field)

        self.assertIn(project.field.first(), fields)


    def test_scraped_news(self):
        news = ScrapedNews.objects.create(
            title = "Lorem ipsum dolor sit amet",
            description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime voluptatum.",
            source = "Google News"
        )

class AdminTest(TestCase):
    def setUp(self) -> None:
        self.client = Client()

    def test_admin_login(self):
        response = self.client.get('/admin')

class RouteTest(TestCase):
    def setUp(self) -> None:
        self.client = Client()


    def test_default_route(test):
        pass

    
    def test_api_route(self):

        resp = self.client.get('api')
        print(resp)
        