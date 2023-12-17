package com.example.service;

import com.example.Dao.NewsDao;
import com.example.entity.News;
import com.example.entity.Params;
import org.springframework.stereotype.Service;



import javax.annotation.Resource;
import java.util.List;

@Service
public class NewsService {
    @Resource
    private NewsDao newsDao;

    public List<News> getNews() {
        return newsDao.selectAll();
    }


    public List<News> findBySearch(Params params) {
        return newsDao.findBySearch(params);
    }

    public class CustomException extends RuntimeException {
        public CustomException(String message) {
            super(message);
        }
    }
    public void add(News news) {

        if (news.getTitle() == null || "".equals(news.getTitle())) {
            throw new CustomException("Title不能为空");
        }
        News id = newsDao.findById(news.getId());
        if (id != null) {
            // 说明已经有了，这里我们就要提示前台不允许新增了
            throw new CustomException("该id已存在，请更换id");
        }
        newsDao.insertSelective(news);
    }
    public void update(News news) {
        newsDao.updateByPrimaryKeySelective(news);
    }

    public void delete(Integer id) {
        newsDao.deleteByPrimaryKey(id);
    }
}
