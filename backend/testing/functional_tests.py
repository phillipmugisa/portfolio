import time
import unittest 

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


# class NewVisitor(unittest.TestCase):
#     def setUp(self) -> None:
#         # self.browser = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

#         self.browser = webdriver.Chrome(executable_path='/home/mugisa/.wdm/drivers/chromedriver/linux64/101.0.4951.41/chromedriver')

#     def tearDown(self) -> None:
#         self.browser.quit()

#     def test_start_platform(self) -> None:
#         # a new user visits the website
#         self.browser.get('http://localhost:8000')
        
#         # he sees that the title field has "mugisathedev | Full Stack Web Developer"
#         self.assertIn("mugisathedev | Full Stack Web Developer", self.browser.title)


class AdminTest(unittest.TestCase):
    def setUp(self) -> None:
        self.browser = webdriver.Chrome(executable_path='/home/mugisa/.wdm/drivers/chromedriver/linux64/101.0.4951.41/chromedriver')
        self.browser.implicitly_wait(15)

    def tearDown(self) -> None:
        # time.sleep(20000)
        self.browser.close()

    def test_admin_view(self):
        # admin user enter amdin page url in browser
        self.browser.get('http://localhost:8000/admin')

        # default django admin dashboard login is displayed
        self.assertIn('Django administration', self.browser.page_source)

        # the user tries to login
        user_name = self.browser.find_element(By.ID, 'id_username')
        pass_word = self.browser.find_element(By.ID, 'id_password')

        user_name.send_keys('mugisa')
        pass_word.send_keys('mugisa')

        self.browser.find_element(By.XPATH, "//input[@value='Log in']").click()

        # no error messages
        self.assertNotIn('errornote', self.browser.page_source)

        # on logining, he sees the Dashboard
        self.assertIn('Django administration', self.browser.page_source)
        
        # user sees tables listed
        self.assertIn('Projects', self.browser.page_source)
        
        # user posts project
        self.browser.find_element(By.LINK_TEXT, 'Projects').click()
        self.browser.find_element(By.CSS_SELECTOR, 'a[href="/admin/portfolio/project/add/"]').click()
        
        # post
        self.browser.find_element(By.ID, 'id_title').send_keys("Test Project selenium title")
        self.browser.find_element(By.ID, 'id_description').send_keys("Test Project selenium description")

        self.browser.find_element(By.XPATH, "//select[@id='id_stack']/option[@value='1']").click()
        self.browser.find_element(By.XPATH, "//select[@id='id_field']/option[@value='2']").click()

        self.browser.find_element(By.CSS_SELECTOR, "input[type='submit']").click()

        # no error messages
        self.assertNotIn('errornote', self.browser.page_source)

        # project is successfully created
        self.assertIn('Test Project selenium title', self.browser.page_source)

        # user logs out
        self.browser.find_element(By.LINK_TEXT, "LOG OUT").click()
        self.assertIn('Logged out', self.browser.page_source)

if __name__ == "__main__":
    unittest.main()