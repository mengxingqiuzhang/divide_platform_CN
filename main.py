#!/usr/bin/env python
# coding=utf-8


import json
import codecs
from prep import prep
import re
from os import walk

ENCODING_UTF_8 = "utf-8"
NEW_LINE = "\n"


def test():
    txt = "1111 4444 6666     "
    list = re.findall("\d*", txt)
    if list:
        print list


if __name__ == "__main__":
    # file_name = "corpus/medical_record/sznk.json"
    # dir_name = "corpus/medical_record"
    # corpus_file = codecs.open("corpus/medical_record/data.txt", "w", ENCODING_UTF_8)
    # for root, dirs, files in walk(dir_name):
    #     for f in files:
    #         if not f.endswith(".json"):
    #             continue
    #         with codecs.open(root + "/" + f, "r", ENCODING_UTF_8) as src:
    #             json_data = json.load(src)
    #             for d in json_data:
    #                 corpus_file.write(prep(d["Content_Txt"]))
    #                 corpus_file.write(NEW_LINE)
    # corpus_file.close()

    # 正则表达式
    # line = re.sub(u"[,。、]{2,}", ",", line)
    # line = re.sub(u"\(\)", "", line)
    # line = re.sub(u"([一-龠,。]+)([~]+)([一-龠，。]+)", "\\1\\3", line)
    # line = re.sub(u"([a-zA-z0-9]+)([\s]+)([a-zA-Z0-9一-龠，。,]+)", "\\1\\3", line)

    corpus_file = codecs.open("tmp/avator.txt", "r", ENCODING_UTF_8)
    f = codecs.open("tmp/avator.temp.txt", "w", ENCODING_UTF_8)
    for line in corpus_file.readlines():
        if len(line) < 4:
            continue
        # 调用prep预处理
        line = prep(line)
        # 提取连续的汉字字符
        line = re.findall(u"[\u4e00-\u9fa5]+", line)
        line = ",".join(line)

        pat = u"[\u53ca]"
        line = re.sub(pat,",",line)

        f.write(line+NEW_LINE)
    f.close()
