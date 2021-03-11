import unittest

from utilities import filehash


class TestUtillities(unittest.TestCase):
    def test_filehash(self):
        path = 'C:\\Users\\Ania\\Downloads\\ubuntu-20.04.2.0-desktop-amd64.iso'
        result = filehash(path)
        self.assertEqual(result, "93bdab204067321ff131f560879db46bee3b994bf24836bb78538640f689e58f")
